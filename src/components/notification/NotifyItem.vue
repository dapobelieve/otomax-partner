<template>
    <div class='transaction-info pa-4' :style='{ backgroundColor: color}' >
        <div class="t-content d-flex align-center">
            <div class=' mr-4 mt-0 align-self-start'>
                <slot>
                    <span class="status" :style="{ backgroundColor: priceColor, }"></span>
                </slot>
            </div>
            <div>
                <h5>{{ description }}</h5>
                <small class='date'>Date {{ date }}</small>
            </div>
            <div class='' style='margin-left: auto'>
                <p class='mb-0 text-center' :style="{ color: priceColor, display: statusText ? 'block' : 'none' }">{{ statusText }}</p>
                <h5 :style="{ display: amount ? 'block' : 'none' }">$ {{ amount }}</h5>
            </div>
            <div class="">
                <span class='new' :style='{ visibility: isNew ? "visible" : "hidden" }'></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotifyItem',
    props: {
        date: { type: String, },
        amount: { type: String, },
        statusText: { type: String, },
        description: { type: String, },
        color: { type: String, default: '#F9F9F9', },
        priceColor: { type: String, default: '#13DBA4' },
        isNew: { type: Boolean, default: false },
    },
}
</script>

<style lang="scss" scoped>
 
    @import '../../assets/css/_variables.scss';

    .transaction-info {
        border-radius: $border-radius;

        .t-content {
            .status  {
                width: 15px;
                height: 15px;
                display: block;
                border-radius: 15px;
                align-self: flex-start;
            }
            .date { color: #B7B7B7; }
            .new { width: 7px; height: 7px; border-radius: 100%; display: block; background: $blue; margin-left: 10px;  }
        }
    }    
</style>