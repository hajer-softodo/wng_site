#page.10 = FLUIDTEMPLATE
#page.10 {
#    format = html
#    file = EXT:wng_site/Resources/Private/layouts/home_layout.html
#    partialRootPath = EXT:wng_site/Resources/Private/partials/
#    layoutRootPath = EXT:wng_site/Resources/Private/layouts/  
#    variables {
#        content_main < styles.content.get
#        content_main.select.where = colPos = 0
#        
#        content_right < styles.content.get
#        content_right.select.where = colPos = 1
#      
#        content_left < styles.content.get
#        content_left.select.where = colPos = 2   
#        
#        content_img < styles.content.get
#        content_img.select.where = colPos = 3
#    }

#}

#page.10.file.stdWrap.cObject = CASE
#page.10.file.stdWrap.cObject {
#    key.data = levelfield:-1, backend_layout_next_level, slide
#    key.override.field = backend_layout
#    
#    default = TEXT
#    default.value = EXT:wng_site/Resources/Private/template_with_submenu.html
#    
#    1 = TEXT
#3    1.value = EXT:wng_site/Resources/Private/template_home.html
#    2 = TEXT
#    2.value = EXT:wng_site/Resources/Private/template_with_submenu.html
#}