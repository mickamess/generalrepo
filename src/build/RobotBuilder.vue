<template>
  <div class='content'>
    <div class="preview">
       <CollapsibleSection>
      <div class="preview-content">
        <div class="top-row">
          <img :src="selectedRobot.head.src"/>
        </div>
        <div class="middle-row">
          <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
          <img :src="selectedRobot.torso.src"/>
          <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
        </div>
        <div class="bottom-row">
          <img :src="selectedRobot.base.src"/>
        </div>
      </div>
      </CollapsibleSection>
      <button @click='addToCart()' class='add-to-cart'>Add to Cart</button>
    </div>
    <div class="top-row">
      <!--<div class="top part" :class="{'sale-border': selectedRobot.head.onSale}">
        <div class="robot-name">
          {{availableParts.heads[selectHeadIndex].title}}
          <span v-if="availableParts.heads[selectHeadIndex].onSale" class="sale">
            On Sale !
          </span>
        </div>
      </div> -->
      <PartSelecter position="top"
      :parts='availableParts.heads'
      @partSelected='part => selectedRobot.head=part'/>
    </div>
    <div class="middle-row">
      <PartSelecter position="left"
      :parts='availableParts.arms'
      @partSelected='part => selectedRobot.leftArm=part'/>
      <PartSelecter position="center"
      :parts='availableParts.torsos'
      @partSelected='part => selectedRobot.torso=part'/>
      <PartSelecter position="right"
      :parts='availableParts.arms'
      @partSelected='part => selectedRobot.rightArm=part'/>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <PartSelecter position="bottom"
        :parts='availableParts.bases'
        @partSelected='part => selectedRobot.base=part'/>
      </div>
    </div>
    <div>
      <h1>cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(robot, index) in cart' :key='index'>
            <td>{{ robot.head.title }}</td>
            <td class="cost">{{ robot.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import availableParts from '../data/parts';
import PartSelecter from './partSelecter.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

export default {
  name: 'RobotBuilder',
  components: { PartSelecter, CollapsibleSection },
  data() {
    return {
      availableParts,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {},
      },
    };
  },
  computed: {
    headBorderStyle() {
      return {
        border: this.selectedRobot.head.onSale
          ? '3px solid red'
          : '3px solid grey',
      };
    },
  },
  created() {
    console.log(this.selectedRobot);
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.leftArm.cost
          + robot.rightArm.cost
          + robot.torso.cost
          + robot.base.cost
          + robot.head.cost;
      console.log(this.selectedRobot);
      this.cart.push({ ...robot, cost });
    },
    /*    handleHeadSelectedPart(part) {
      this.selectedRobot.head = part;
      console.log(this.selectedRobot.head);
    },
    handleTorsoSelectedPart(part) {
      this.selectedRobot.torso = part;
    },
    handleBaseSelectedPart(part) {
      this.selectedRobot.base = part;
    },
    handleLeftArmSelectedPart(part) {
      this.selectedRobot.leftArm = part;
    },
    handleRightArmSelectedPart(part) {
      this.selectedRobot.rightArm = part;
    }, */
  },
};

</script>

<style scoped>
.preview-cart-head {
  position: relative;
  width: auto;
  border: 2px red solid;
}
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name{
  position: absolute;
  top:-25px;
  text-align: center;
  width:100%;
}
.sale{
  color: red;
}
.content{
  position:relative;
}
.add-to-cart{
  position:absolute;
  right:5px;
  width:210pX;
  padding:3px;
  font-size:16px;
}
td, th{
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost{
  text-align: right;
}

.sale-border{
  border: red solid 3px;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
