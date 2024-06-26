<template>
  <div class="tags-view-container">
    <ScrollPane ref="scrollbarRef" class="tags-view-wrapper">
      <div ref="scrollbarContentRef" class="scrollbar-content">
        <router-link
          v-for="tag in tagsViewStore.visitedViews"
          :class="isActive(tag) ? 'active' : ''"
          :key="(tag.path as string)"
          :to="{ path: tag.path as string, query: tag.query }"
          @contextmenu.prevent="openMenu(tag, $event)"
          class="tags-view-item"
        >
          {{ tag.meta?.title }}
          <el-icon v-if="tagsViewStore.visitedViews.length > 1 && !isAffix(tag)" :size="12" @click.prevent.stop="closeSelectedTag(tag)">
            <Close />
          </el-icon>
        </router-link>
      </div>
    </ScrollPane>
    <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">刷新</li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭所有</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, onMounted, ref, watch } from 'vue'
import { useRoute, type RouteRecordRaw, useRouter } from 'vue-router'
import path from 'path-browserify'
import { Close } from '@element-plus/icons-vue'
import { useEventListener } from '@vueuse/core'

import { useTagsViewStore, type ITagView } from '@/store/modules/tags-view'
import { usePermissionStore } from '@/store/modules/permission'

import ScrollPane from './ScrollPane.vue'

const route = useRoute()
const router = useRouter()
const tagsViewStore = useTagsViewStore()
const permissionStore = usePermissionStore()
const isActive = (tag: ITagView) => {
  return tag.path === route.path
}
const isAffix = (tag: ITagView) => {
  return tag.meta?.affix
}
let affixTags: ITagView[] = []
const filterAffixTags = (routes: RouteRecordRaw[], basePath = '/') => {
  let tags: ITagView[] = []
  routes.forEach((route) => {
    if (route.meta?.affix) {
      const tagPath = path.resolve(basePath, route.path)
      tags.push({
        fullPath: tagPath,
        path: tagPath,
        name: route.name,
        meta: { ...route.meta }
      })
    }
    if (route.children) {
      const childTags = filterAffixTags(route.children, route.path)
      if (childTags.length >= 1) {
        tags = tags.concat(childTags)
      }
    }
  })
  return tags
}
const initTags = () => {
  affixTags = filterAffixTags(permissionStore.routes)
  for (const tag of affixTags) {
    // 必须含有 name 属性
    if (tag.name) {
      tagsViewStore.addVisitedView(tag)
    }
  }
}
const addTags = () => {
  if (route.name) {
    tagsViewStore.addVisitedView(route)
  }
}

const visible = ref(false)
const top = ref(0)
const left = ref(0)
const selectedTag = ref<ITagView>({})

const refreshSelectedTag = (view: ITagView) => {
  router.replace({ path: '/redirect' + view.path, query: view.query })
}

const closeSelectedTag = (view: ITagView) => {
  tagsViewStore.delVisitedView(view)
  if (isActive(view)) {
    toLastView(tagsViewStore.visitedViews, view)
  }
}

const closeOthersTags = () => {
  if (selectedTag.value.fullPath !== route.path && selectedTag.value.fullPath !== undefined) {
    router.push(selectedTag.value.fullPath)
  }
  tagsViewStore.delOthersVisitedViews(selectedTag.value)
}

const closeAllTags = (view: ITagView) => {
  tagsViewStore.delAllVisitedViews()
  if (affixTags.some((tag) => tag.path === route.path)) {
    return
  }
  toLastView(tagsViewStore.visitedViews, view)
}

const toLastView = (visitedViews: ITagView[], view: ITagView) => {
  const latestView = visitedViews.slice(-1)[0]
  if (latestView !== undefined && latestView.fullPath !== undefined) {
    router.push(latestView.fullPath)
  } else {
    // 如果 TagsView 全部被关闭了，则默认重定向到主页
    if (view.name === 'Dashboard') {
      // 重新加载主页
      router.push({ path: '/redirect' + view.path, query: view.query })
    } else {
      router.push('/')
    }
  }
}
const instance = getCurrentInstance()
const openMenu = (tag: ITagView, e: MouseEvent) => {
  const menuMinWidth = 105
  // container margin left
  const offsetLeft = instance!.proxy!.$el.getBoundingClientRect().left
  // container width
  const offsetWidth = instance!.proxy!.$el.offsetWidth
  // left boundary
  const maxLeft = offsetWidth - menuMinWidth
  // 15: margin right
  const left15 = e.clientX - offsetLeft + 15
  if (left15 > maxLeft) {
    left.value = maxLeft
  } else {
    left.value = left15
  }
  top.value = e.clientY
  visible.value = true
  selectedTag.value = tag
}

watch(
  route,
  () => {
    addTags()
  },
  {
    deep: true
  }
)

onMounted(() => {
  initTags()
  addTags()
  useEventListener(document, 'click', () => (visible.value = false))
})
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: var(--tagsview-height);
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid var(--tagsview-tag-border-color);
      border-radius: var(--tagsview-tag-border-radius);
      color: var(--tagsview-tag-text-color);
      background-color: var(--tagsview-tag-bg-color);
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: var(--tagsview-tag-active-bg-color);
        color: var(--tagsview-tag-active-text-color);
        border-color: var(--tagsview-tag-active-border-color);
        &::before {
          content: '';
          background-color: var(--tagsview-tag-active-before-color);
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
      .el-icon {
        width: 16px;
        height: 16px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transform-origin: 100% 50%;
        margin: 0 2px;
        vertical-align: middle;
        &:before {
          transform: scale(0.6);
          display: inline-block;
          vertical-align: -3px;
        }
        &:hover {
          background-color: var(--tagsview-tag-icon-hover-bg-color);
          color: var(--tagsview-tag-icon-hover-color);
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
