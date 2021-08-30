<template>
  <div class="ingredient">
    <DoneIcon />
    <Text size="lg" v-text="formattedIngredient"></Text>
  </div>
</template>

<script>
import {computed} from "vue";

import DoneIcon from "@/components/UI/icons/DoneIcon";
import Text from "@/components/UI/Text";

export default {
  name: "Ingredient",
  components: {Text, DoneIcon},
  props: {
    ingredient: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // return quantity in a fractional format
    const fractionalQty = computed(() => {
      const gcd = (a, b) => {
        if (b < 0.0000001) return a;

        return gcd(b, Math.floor(a % b));
      }

      const decimalRight = props.ingredient.qty.toString().split('.')[1]

      if (decimalRight) {
        const decimalLeft = props.ingredient.qty.toString().length - 2

        let denominator = Math.pow(10, +decimalLeft)
        let numerator = props.ingredient.qty * denominator

        const divisor = gcd(numerator, denominator);

        numerator /= divisor;
        denominator /= divisor;

        return Math.floor(numerator) + '/' + Math.floor(denominator)
      }

      return props.ingredient.qty
    })

    const formattedIngredient = computed(() => props.ingredient.qty ? `${fractionalQty.value} ${props.ingredient.ingredient}` : `${props.ingredient.ingredient}`)

    return {
      formattedIngredient
    }
  }
}
</script>

<style scoped>
.ingredient {
  display: flex;
}
</style>