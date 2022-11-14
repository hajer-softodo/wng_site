##
## Copyright 2020 WNG SA
##
## Version:  3
## Auteur:   Kilian Zucconi <kilian.zucconi@wng.ch>
## Auteur:   Natanaël Viau <natanael.viau@wng.ch>
## Projet:   WNG SA - TYPO3 Standard
## Encodage: UTF-8
##
## Définition des constantes générales du site
##


##
## Configuration principale.
##

#
# Default PAGE object:
#

page.includeCSS {
  file1 = FILE:EXT:wng_site/Resources/Public/Scss/bootstrap/bootstrap.scss
  file3 = FILE:EXT:wng_site/Resources/Public/Scss/slick-theme.scss
  file4 = FILE:EXT:wng_site/Resources/Public/Scss/slick.scss
  file5 = FILE:EXT:wng_site/Resources/Public/Scss/print.scss
  file6 = FILE:EXT:wng_site/Resources/Public/Scss/lightgallery.scss
  file7 = FILE:EXT:wng_site/Resources/Public/Scss/standardisation.scss
  file8 = FILE:EXT:wng_site/Resources/Public/Scss/main.scss
}


page.includeJS {
  file1 = FILE:EXT:wng_site/Resources/Public/JavaScript/Dist/jquery-3.4.1.min.js
}
page.includeJSFooter {            
  file2 = FILE:EXT:wng_site/Resources/Public/JavaScript/Dist/modernizr-3.3.1-respond-1.4.2.min.js      
  file3 = FILE:EXT:wng_site/Resources/Public/JavaScript/Dist/bootstrap.min.js
  file4 = FILE:EXT:wng_site/Resources/Public/JavaScript/Dist/slick.min.js
  file5 = FILE:EXT:wng_site/Resources/Public/JavaScript/Dist/lightgallery-all.min.js
  file6 = FILE:EXT:wng_site/Resources/Public/JavaScript/Src/main.js       
}

page.headerData.16 = TEXT
page.headerData.16.value = <meta name="viewport" content="width=device-width, initial-scale=1">

page.headerData.17 = TEXT
page.headerData.17.value (
  <script type="text/javascript" src="/tarteaucitron/tarteaucitron.js"></script>
  <script type="text/javascript">
    tarteaucitron.init({
      "hashtag": "#tarteaucitron", /* Ouverture automatique du panel avec le hashtag */
      "highPrivacy": false, /* désactiver le consentement implicite (en naviguant) ? */
      "orientation": "bottom", /* le bandeau doit être en haut (top) ou en bas (bottom) ? */
      "adblocker": false, /* Afficher un message si un adblocker est détecté */
      "showAlertSmall": false, /* afficher le petit bandeau en bas à droite ? */
      "cookieslist": true, /* Afficher la liste des cookies installés ? */
      "removeCredit": false /* supprimer le lien vers la source ? */
    });
  </script>
)

page.headerData.18 = TEXT
page.headerData.18.value (
<script type="text/javascript">
  var tarteaucitronForceLanguage = 'fr';
</script>
)
[siteLanguage("languageId") == "2"]
page.headerData.18 = TEXT
page.headerData.18.value (
<script type="text/javascript">
  var tarteaucitronForceLanguage = 'en';
</script>
)
[GLOBAL]

config {
  baseURL = http://{$domain}/
  renderCharset = utf-8
  metaCharset = utf-8
  doctype = html5
  xmlprologue = none
  doctypeSwitch = 0
  enableContentLengthHeader = 1
  removeDefaultJS = external
  inlineStyle2TempFile = 0
  disablePrefixComment = 1
  headerComment (
  Copyright 2019 WNG SA, all rights reserved

  WNG SA - Passage St-François 9 - CH-1003 Lausanne
  Tel +41 21 320 11 11 - Fax +41 21 320 11 10
  http://www.wng.ch/ - info[at]wng[dot]ch
  )

  xhtml_cleaning = all
  noPageTitle = 2
  insertDmailerBoundaries = 0

  # Gestion des images
  meaningfulTempFilePrefix = 1
  noScaleUp = 1

  # Gestion des liens
  linkVars = L
  uniqueLinkVars = 1
  prefixLocalAnchors = all
  intTarget = _top
  extTarget = _blank
  spamProtectEmailAddresses = 1
  spamProtectEmailAddresses_atSubst = (at)

  # Réecriture d'URL
  simulateStaticDocuments = 0
  absRefPrefix = http://{$domain}/
  
  # Attributs de la balise HTML
  htmlTag_langKey = fr-FR
  
  index_enable = 1
}


##
## URL accessible en HTTPS
##
[globalString = _SERVER|HTTPS=on]
config.baseURL = https://{$domain}
[end]

##
## Autre configuration
##

# Le titre <default> est un h1
content.defaultHeaderType = 1

# Modification de la configuration des titres
lib.stdheader.2 >
lib.stdheader.3 >
lib.stdheader.10.0.dataWrap = <h1> | </h1>
lib.stdheader.10.2.dataWrap = <h2> | </h2>
lib.stdheader.10.3.dataWrap = <h3> | </h3>
lib.stdheader.10.4.dataWrap = <h4> | </h4>
lib.stdheader.10.5.dataWrap = <h5> | </h5>
lib.stdheader.stdWrap.dataWrap >
lib.stdheader.stdWrap.prefixComment >

# Désactivation de la suppression des classes sur les tableaux de l'éditeur
lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class.list >

tt_content.image.20.maxW >

config.contentObjectExceptionHandler = 0

tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
  key.field = layout

  1 = TEXT
  1.value = <div class="box-color bg-light-grey">|</div>
  2 = TEXT
  2.value = <div class="box-color bg-blue-border">|</div>
  3 = TEXT
  3.value = <div class="box-color bg-blue">|</div>
  4 = TEXT
  4.value = <div class="hr-dotted-light-grey">|</div>
  5 = TEXT
  5.value = <div class="hr-light-grey">|</div>
  6 = TEXT
  6.value = <div class="hr-dotted-light-blue">|</div>
  7 = TEXT
  7.value = <div class="hr-light-blue">|</div>
}