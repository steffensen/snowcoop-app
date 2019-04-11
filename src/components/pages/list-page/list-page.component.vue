<template>
  <div id="listPage">
    <el-container>
      <side-navigation/>
      <el-main>
        <div class="list-wrapper">
          <div class="list-header">
          <span class="list-title">{{ `You have ${addressList.length} addresses to complete` }}</span>
          </div>
          <div class="list-view-wrapper">
            <el-card class="map-view-card">
              <map-view v-if="addressList" v-bind:showList="true" v-bind:addressList="addressList"></map-view>
            </el-card>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script src="./list-page.component.js"></script>
<style src="./list-page.component.css"></style>