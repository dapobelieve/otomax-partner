<template>
    <div class='transaction-info pa-4' :style='{ backgroundColor: color}'>
        <div class="t-content d-flex align-center">
            <div class=' mr-4 mt-0 align-self-start'>
                <span class="status" :style="{ backgroundColor: succeed ? '#13DBA4' : '#FF4141', }"></span>
            </div>
            <div>
                <h5>{{ description }}</h5>
                <small class='date'>Date {{ date }}</small>
            </div>
            <div class='' style='margin-left: auto'>
                <p class='mb-0 text-center' :style="{ color: succeed ? '#13DBA4' : '#FF4141', }">{{ statusText }}</p>
                <h4>$ {{ amount }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TransactionInfo',
    props: {
        date: { type: String, },
        amount: { type: String, },
        statusText: { type: String, },
        succeed: { type: Boolean, default: true, },
        description: { type: String, },
        color: { type: String, default: '#F9F9F9', },
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
                align-self: flex-start
            }
            .date { color: #B7B7B7; }
        }
    }    
</style>