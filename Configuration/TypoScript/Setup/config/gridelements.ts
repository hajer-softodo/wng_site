# remove the default wrap for all content elements
#tt_content.stdWrap.innerWrap.cObject.default >

tt_content.gridelements_pi1.20.10.setup{
  1 < lib.gridelements.defaultGridSetup
  1 {
    columns.1.renderObj = <tt_content
    columns.1.wrap = <div class="col-sm-6">|</div>

    columns.2.renderObj = <tt_content
    columns.2.wrap = <div class="col-sm-6">|</div>

    stdWrap.wrap = <div class="row">|</div>
  }

  2 < lib.gridelements.defaultGridSetup
  2 {
    columns.1.renderObj = <tt_content
    columns.1.wrap = <div class="col-sm-4">|</div>

    columns.2.renderObj = <tt_content
    columns.2.wrap = <div class="col-sm-4">|</div>
    
    columns.3.renderObj = <tt_content
    columns.3.wrap = <div class="col-sm-4">|</div>   

    stdWrap.wrap = <div class="row">|</div>
  }

  3 < lib.gridelements.defaultGridSetup
  3 {

    columns.1.renderObj = <tt_content
    columns.1.wrap = <div class="col-md-3 col-sm-6">|</div>

    columns.2.renderObj = <tt_content
    columns.2.wrap = <div class="col-md-3 col-sm-6">|</div>
    
    columns.3.renderObj = <tt_content
    columns.3.wrap = <div class="col-md-3 col-sm-6">|</div>   
   
    columns.4.renderObj = <tt_content
    columns.4.wrap = <div class="col-md-3 col-sm-6">|</div>       

    stdWrap.wrap = <div class="row">|</div>
  }

}