// ==UserScript==
// @name         ArxivRedirector
// @namespace    https://github.com/tao-shen/ArxivRedirector
// @homepage     https://github.com/tao-shen/ArxivRedirector
// @version      1.0
// @author       tao.shen
// @description  Open arXiv sites with arXiv mirrors
// @include      /^https?://(.*\.)?arxiv\.org/.*/
// @include      http://xxx.itp.ac.cn/*
// @run-at       document-start
// ==/UserScript==

window.onload=function() {
    'use strict';
    if (location.href.search('xxx.itp.ac.cn') == -1){
    function incompletePDF(url){ return url.includes('/pdf') && !url.endsWith('pdf') }
    function abstractURL(url){ return url.includes('/abs') }
    let mirrors = {
        'China':'xxx.itp.ac.cn',
    }
    let mirror='China'
    let url = location.href.replace(location.hostname,mirrors[mirror]).replace('https','http')
    url = incompletePDF(url) ? url+'.pdf' : url
    console.log(mirror+':'+url)
    location.replace(url,'xxx.itp.ac.cn')}
}
