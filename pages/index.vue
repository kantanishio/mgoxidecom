<template>


<div class="container-sm ml-10 mt-10 text-gray-500 relative pl-28">

<img src="/collection/me_small.jpg" alt="Profile photo" class="absolute top-0 left-0 w-24 h-24 rounded-full object-cover" />

<p class="text-l text-gray-500 leading-relaxed">
    CONTACT
    <br>
    <br>
    <br>
    <br>
    Kanta Nishio
    <br>
    <br>
    080 3093 8738
    <br>
    <br>
    kantanishio@mg-oxide.com
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>


</p>

<p class="text-l text-gray-500 leading-relaxed">
   
   生活
   <br>
   2025, PET, 0904 0918 1002 1016 1106 1120 FUN, 0911 0925 1019 1023 1113 1127 1211 1225
   <br>
   <br>
   <br>


</p>


<p class="text-l text-gray-500 leading-relaxed">
   
    WORK
    <br>
    Video, TV, etc.
    <br>
    <a href="https://www.web.nhk/tv/an/eigodeasobo/pl/series-tep-WQZGW8RVPL">eigo de asobo</a>
    <a href="https://www.web.nhk/tv/an/eigodeasobo/pl/series-tep-WQZGW8RVPL"></a>
    <br>
    <br>
    <br>


</p>

<p class="text-l text-gray-500 leading-relaxed">
   
   KANSTAGRAM
   <br>
   coming soon...
   <br>
   <br>
   <br>

</p>


</div>

<div class="fixed bottom-4 right-4 text-gray-600 text-sm bg-white/70 rounded px-3 py-1 pointer-events-none select-none">
  {{ product }}
 </div>

</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const x = ref(0)
const y = ref(0)
const product = computed(() => x.value * y.value)

function handlePointerLike(p) {
  if (!p) return
  x.value = Math.round(p.clientX || 0)
  y.value = Math.round(p.clientY || 0)
}

function onPointer(e) {
  handlePointerLike(e)
}

function onTouch(e) {
  const t = e.touches && e.touches[0]
  handlePointerLike(t)
}

onMounted(() => {
  window.addEventListener('pointermove', onPointer, { passive: true })
  window.addEventListener('pointerdown', onPointer, { passive: true })
  window.addEventListener('touchstart', onTouch, { passive: true })
  window.addEventListener('touchmove', onTouch, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointer)
  window.removeEventListener('pointerdown', onPointer)
  window.removeEventListener('touchstart', onTouch)
  window.removeEventListener('touchmove', onTouch)
})
</script>