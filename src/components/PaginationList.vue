<template>
<!-- Paginations -->
  <div class="pagination" v-if="total > per_page">
      <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div class="flex-1 flex justify-between sm:hidden">
          <div @click="prev_page_url ? getExhibitors(prev_page_url) : null" class="cursor-pointer relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500" :class="[(prev_page_url) ? '' : 'hidden']">
            Previous
          </div>
          <div @click="next_page_url ? getExhibitors(next_page_url) : null" class="cursor-pointer ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500" :class="[(next_page_url) ? '' : 'hidden']">
            Next
          </div>
        </div>
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-700">
              Showing
              <span class="font-medium">{{from}}</span>
              to
              <span class="font-medium">{{to}}</span>
              of
              <span class="font-medium">{{total}}</span>
              results
            </p>
          </div>
          <div>
            <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
              <div v-for="(link, index) in links"  :id="index" :key="index" @click="(!link.active && link.url) ? (getExhibitors(link.url)) : null"  class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50" v-bind:class="{ 'bg-gray-100': link.active }">
                <span v-html="link.label"></span>
              </div>
            </nav>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useMainStore } from '../store'

export default {
  name:'PaginationList',
  setup() {
      const main = useMainStore()
      const getExhibitors = (e) => main.actionsGetExhibitors(e.split('=')[1])
      return {
        total: computed(() => main.getTotal),
        per_page: computed(() => main.getPer_page),
        from: computed(() => main.getFrom),
        to: computed(() => main.getTo),
        links: computed(() => main.getLinks),
        getExhibitors,
        prev_page_url: computed(() => main.getPrev_page_url),
        next_page_url: computed(() => main.getNext_page_url),
      }
  } 
}
</script>
