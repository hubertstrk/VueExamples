<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="editor">
      <textarea class="editor-in" :value="input" @input="update"></textarea>
      <div class="editor-out" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>

import _ from 'lodash'
import Remarkable from 'remarkable'
import hljs from 'highlight.js'
import '../../node_modules/highlight.js/styles/github.css'

const md = new Remarkable('full', {
  html: false,
  xhtmlOut: false,
  breaks: false,
  langPrefix: 'language-',
  linkify: true,
  linkTarget: '',

  // Enable some language-neutral replacements + quotes beautification
  typographer: false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if input not changed
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) { 
        console.info(`cannot hightlight ${str} as ${lang}`)
      }
    }

    try {
      return hljs.highlightAuto(str).value
    } catch (__) {
      console.info(`cannot hightlight ${str} with default highlighter`)
    }

    return '' // use external default escaping
  }
})

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      input: '# hello'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return md.render(this.input)
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
}
</script>

<style lang="css" scoped>
.editor {
  display: flex;
  background-color: white;
}
.editor-in {
  width: 800px;
  height: 400px;
  background-color: white;
}
.editor-out {
  width: 800px;
  height: 400px;
  background-color: white;
}

</style>
