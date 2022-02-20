<script lang="ts" setup>
import { reactive, ref } from "vue";
import CoinCheck from "./coin-check.vue";

const props = defineProps<{
  pair?: string;
  background?: string;
}>();

const url = "https://api.coinbase.com/v2/prices";
const btcPair = "BTC-USD";
const ethPair = "ETH-USD";
const dogePair = "DOGE-USD";

interface moneyFormat {
  formatted: string;
  money: number;
  name: string;
}

const btc = reactive({} as moneyFormat);
const date = ref("");
const eth = reactive({} as moneyFormat);
const doge = reactive({} as moneyFormat);
const pass = reactive({} as moneyFormat);

async function grabBitCointPrice(
  pair: string
): Promise<{ money: number; formatted: string; name: string }> {
  const btcInfo = await fetch(`${url}/${pair}/buy`);
  const money = await btcInfo.json();
  return {
    money: parseFloat(money.data.amount),
    formatted: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(money.data.amount),
    name: pair.split("-")[0],
  };
}
setValues();

async function setValues() {
  const btcValue = await grabBitCointPrice(btcPair);
  const ethValue = await grabBitCointPrice(ethPair);
  const dogeValue = await grabBitCointPrice(dogePair);
  btc.formatted = btcValue.formatted;
  btc.money = btcValue.money;
  btc.name = btcValue.name;

  eth.formatted = ethValue.formatted;
  eth.money = ethValue.money;
  eth.name = ethValue.name;

  doge.formatted = dogeValue.formatted;
  doge.money = dogeValue.money;
  doge.name = dogeValue.name;

  if (props.pair) {
    const pairValue = await grabBitCointPrice(props.pair);
    pass.formatted = pairValue.formatted;
    pass.money = pairValue.money;
    pass.name = pairValue.name;
  }

  date.value = new Date().toString();
}

setInterval(setValues, 5000);
</script>
<template>
  <slot name="header"></slot>
  <section>
    <coin-check :coin="btc" />
    <coin-check :coin="doge" />
    <coin-check :coin="eth" />
    <coin-check v-if="pair" :coin="pass" />
  </section>
  <div class="sub">
    Last Update: <span>{{ date }}</span>
  </div>
  <slot name="footer"></slot>
</template>

<style>
.sub {
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 2.5rem;
  margin: 0 auto;
  gap: 1rem;
}

section > div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 0.5rem;
  width: 20%;
  border: 1px solid black;
}

.inner {
  background-color: v-bind(background);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

svg {
  width: 30px;
}
.up {
  fill: green;
}
.down {
  fill: red;
}
.price-info {
  display: flex;
  gap: 1.2rem;
}
</style>
