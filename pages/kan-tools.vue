<template>
  <div class="container-sm ml-10 mt-10 mb-24 text-gray-500 pl-28 max-w-3xl">
    <p class="text-sm text-gray-400 mb-6">
      <NuxtLink to="/" class="underline hover:text-gray-600">← top</NuxtLink>
    </p>

    <h1 class="text-2xl font-semibold text-gray-700 mb-2">kan-tools</h1>
    <p class="text-l leading-relaxed mb-10">
      個人用の CLI ツール置き場。ターミナルに戻ったときのメモ代わり。
      ソースは主にローカル（Dropbox 側）で管理し、このページは一覧と使い方だけ。
    </p>

    <section class="mb-12 border-b border-gray-200 pb-10">
      <h2 class="text-lg font-medium text-gray-700 mb-3">kan-whisper</h2>
      <p class="leading-relaxed mb-4">
        whisper.cpp を使った書き起こし。前段で全文 SRT、繰り返し区間だけ再処理して統合。
      </p>
      <ul class="list-disc pl-5 space-y-2 text-sm leading-relaxed">
        <li>コマンド: <code class="bg-gray-100 px-1 rounded">kan-whisper</code>（<code class="bg-gray-100 px-1 rounded">~/.local/bin</code>）</li>
        <li>例: <code class="bg-gray-100 px-1 rounded text-xs">kan-whisper /path/to/audio.wav --lang ja</code></li>
        <li><code class="bg-gray-100 px-1 rounded">--resume</code> で前段スキップ、<code class="bg-gray-100 px-1 rounded">-s</code> / <code class="bg-gray-100 px-1 rounded">--sparse</code> で無音多め向け VAD</li>
        <li>詳細 README: ローカル <code class="bg-gray-100 px-1 rounded text-xs">…/Transcription/README.md</code></li>
      </ul>
    </section>

    <section class="mb-12 border-b border-gray-200 pb-10">
      <h2 class="text-lg font-medium text-gray-700 mb-3">kan-srt2txt</h2>
      <p class="leading-relaxed mb-4">
        SRT を約1分単位の段落にまとめたプレーンテキスト（.txt）に変換。
      </p>
      <ul class="list-disc pl-5 space-y-2 text-sm leading-relaxed">
        <li>コマンド: <code class="bg-gray-100 px-1 rounded">kan-srt2txt</code></li>
        <li>例: <code class="bg-gray-100 px-1 rounded text-xs">kan-srt2txt /path/to/file.srt</code> → 同じディレクトリに <code class="bg-gray-100 px-1 rounded">.txt</code></li>
        <li>実体: <code class="bg-gray-100 px-1 rounded text-xs">srt_to_md.py</code>（名前は歴史的）</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg font-medium text-gray-700 mb-3">インストール（ざっくり）</h2>
      <p class="text-sm leading-relaxed">
        各ツールの <code class="bg-gray-100 px-1 rounded">install_*.sh</code> を Transcription フォルダで実行し、
        <code class="bg-gray-100 px-1 rounded">PATH</code> に <code class="bg-gray-100 px-1 rounded">$HOME/.local/bin</code> を通す。
      </p>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'kan-tools — mgoxide',
})
</script>
