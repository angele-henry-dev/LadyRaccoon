<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'

import { ref, onMounted } from 'vue'

// Variables
let urlsSitemap = ref()

// On Mounted
onMounted(() => {
  fetch('./sitemap.xml')
    .then((response) => response.text())
    .then((xmlText) => {
      const parser = new DOMParser()
      const xml = parser.parseFromString(xmlText, 'application/xml')
      urlsSitemap.value = convertSitemapToJSON(xml)
    })
    .catch((error) => console.error('Error fetching XML:', error))
})

// Methods
interface SiteMapNode {
  title: string
  url: string
  children: SiteMapNode[]
}

function convertSitemapToJSON(xml: Document): SiteMapNode[] {
  const urls = Array.from(xml.getElementsByTagName('loc')).map(
    (node: any) => node.textContent as string
  )

  const baseUrl = urls[0] // Assuming the first URL is the root (home page)
  const rootObject: SiteMapNode = {
    title: 'Home',
    url: baseUrl,
    children: []
  }

  // Populate children based on whether they are direct descendants of the base URL
  urls.slice(1).forEach((url) => {
    const title = generateTitleFromUrl(url)
    rootObject.children.push({
      title: title,
      url: url,
      children: []
    })
  })

  return [rootObject]
}

function generateTitleFromUrl(url: string) {
  const pathSegments = url.split('/').filter((segment) => segment)
  let title = pathSegments[pathSegments.length - 1]
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize each word

  // Check if title ends with '.' followed by any extension and remove it
  const dotIndex = title.lastIndexOf('.')
  if (dotIndex !== -1) {
    title = title.slice(0, dotIndex) // Remove the extension (everything after the last dot)
  }
  return title
}
</script>

<template>
  <main class="inBetween">
    <h1>Sitemap</h1>
    <div id="sitemap-container">
      <ul>
        <li v-for="(item, i) in urlsSitemap" :key="i">
          <a :href="item.url" target="_self">{{ item.title }}</a>
          <ul v-if="item.children">
            <li v-for="(child, j) in item.children" :key="j">
              <a :href="child.url" target="_self">{{ child.title }}</a>
              <ul v-if="child.children">
                <li v-for="(childBis, k) in child.children" :key="k">
                  <a :href="childBis.url" target="_self">{{ childBis.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </main>

  <FooterComponent class="footer" />
</template>

<style scoped>
h1 {
  margin-bottom: 50px;
}

.sitemap > li > ul {
  margin-top: 1.5rem;
}

ul {
  list-style: none;
}
ul li {
  line-height: 1.5rem;
  vertical-align: top;
  position: relative;
}
ul li a {
  text-decoration: none;
  color: var(--secondary-light-color);
  display: inline-block;
}
ul ul {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}
ul ul li {
  position: relative;
}
ul ul li::before {
  content: '';
  display: inline-block;
  width: 3rem;
  height: 100%;
  border-left: 1px #ccc solid;
  position: absolute;
  top: -0.75rem;
}
ul ul li::before {
  content: '';
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
  border-bottom: 1px #ccc solid;
  position: absolute;
  top: -0.75rem;
}
ul ul li a {
  margin-left: 3.75rem;
}
</style>
