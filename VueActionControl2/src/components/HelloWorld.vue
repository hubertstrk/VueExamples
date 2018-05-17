<template>
  <div >
    <h1>{{ msg }}</h1>
    
    <div class="action">
      <div class="action-top-row">
        <div class="box action-top-left"><span class="box-content">Grunddüngung</span></div>
        <div class="box action-top-right"><span class="box-content">Geometrie bearbeiten</span></div>
      </div>
      <div class="action-circle">Hello!</div>
      <div class="action-bottom-row">
        <div class="box action-bottom-left">
          <a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample">
            Link with href
          </a>
          <div class="collapse" id="collapseExample">
            <div class="well">
              asdfasdf sdafsdf
            </div>
          </div>
        </div>
        <!-- <div class="box action-bottom-right"><span class="box-content">Maßnahmen</span></div> -->
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.action {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  width: 320px;
  position: absolute;
}

.box {
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.action-top-row {
  display: flex;
  justify-content: space-between;
  div {
    height: 22px;
    width: 150px;
  }
}

.action-bottom-row {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  div {
    height: 22px;
    width: 130px;
  }
}

.action-circle {
  position: absolute;
  border-radius: 24px;
  left: 138px;
  top: 6px;
  background-color: white;
  border: 1px solid #ddd;
  height: 44px;
  width: 44px;
}
</style>
