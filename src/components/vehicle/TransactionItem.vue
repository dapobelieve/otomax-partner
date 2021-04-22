<template>
    <div class="transaction-item py-4 px-8" :style=" { backgroundColor: background }">
        <div class="d-flex">
            <div>
                <h4>{{ brand }}</h4>
                <small>{{ model }}</small>
            </div>
            <div class='ml-auto'>
                <div class="price">
                    <h4>$ {{ price }}</h4>
                </div>
                <div class="date">
                    {{ date }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TransactionItem',
    props: {
        brand: { type: String, },
        model: { type: String, },
        price: { type: String, },
        date: { type: String, },
        background: { type: String, default: '#F9F9F9' },
    },
}
</script>

<style lang="scss" scoped>
    .transaction-item {
        border-radius: 8px;
        .price { 
            color: #13DBA4;
        }
    }
</style>