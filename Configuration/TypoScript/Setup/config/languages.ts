config {
   linkVars = L
   uniqueLinkVars = 1
   sys_language_mode = content_fallback
   sys_language_overlay = 1
}

config {
   language = fr
   locale_all = fr_CH.utf-8
   sys_language_uid = 0
}

page {
   config.language = fr
   config.htmlTag_langKey = fr
   meta.language = fr
}

[useragent = *Trident/7.0; rv:11*]
config.htmlTag_setParams = xmlns = "http://www.w3.org/1999/xhtml" xmlns: v = "urn: schemas-microsoft-com: VML" xml: lang = "fr"
[end]

mod.SHARED {
# Language configuration
    defaultLanguageLabel = Français
    defaultLanguageFlag = fr
}

[siteLanguage("languageId") == "1"]
config {
    sys_language_uid = 1
    language = de
    locale_all = de_CH.utf-8
}
page {
    config.language = de
    config.htmlTag_langKey = de
    meta.language = de
}
[global]

[siteLanguage("languageId") == "2"]
config {
    sys_language_uid = 2
    language = en
    locale_all = en_GB.utf-8
}
page {
    config.language = en
    config.htmlTag_langKey = en
    meta.language = en
}
[global]