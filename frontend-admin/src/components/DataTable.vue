<template>
  <div class="el-table-wrapper">
    <table class="el-table">
      <thead class="el-table__header">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="el-table__cell"
            :style="{ width: column.width }"
          >
            <div class="cell">{{ column.title }}</div>
          </th>
        </tr>
      </thead>
      <tbody class="el-table__body">
        <tr v-if="data.length === 0" class="el-table__row el-table__row--empty">
          <td :colspan="columns.length" class="el-table__cell">
            <div class="el-table__empty-block">
              <span class="el-table__empty-text">
                <svg class="empty-icon" viewBox="0 0 1024 1024">
                  <path d="M855.6 427.2H168.4c-2.6 0-5 2-5.3 4.6l-3.5 30.6c-0.2 2.1 0.5 4.2 2 5.7 1.4 1.5 3.4 2.4 5.5 2.4h688.4c2.1 0 4.1-0.9 5.5-2.4 1.4-1.5 2.2-3.6 2-5.7l-3.5-30.6c-0.2-2.6-2.6-4.6-5.3-4.6z" fill="#E6E8EB"/>
                  <path d="M668.6 752.4H355.4c-5.8 0-10.6-4.8-10.6-10.6V608.2c0-5.8 4.8-10.6 10.6-10.6h313.2c5.8 0 10.6 4.8 10.6 10.6v133.6c0 5.8-4.8 10.6-10.6 10.6z" fill="#E6E8EB"/>
                  <path d="M512 384m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#C0C4CC"/>
                  <path d="M512 576c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128z m0-192c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z" fill="#909399"/>
                </svg>
                暂无数据
              </span>
            </div>
          </td>
        </tr>
        <template v-else>
          <tr
            v-for="(row, index) in data"
            :key="row.id || index"
            class="el-table__row"
            :class="{ 'el-table__row--striped': index % 2 === 1 }"
          >
            <td v-for="column in columns" :key="column.key" class="el-table__cell">
              <div class="cell">
                <slot :name="column.key" :row="row" :index="index">
                  {{ row[column.key] }}
                </slot>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.el-table-wrapper {
  overflow-x: auto;
  border-radius: var(--border-radius-base);
  border: 1px solid var(--color-border-lighter);
  background-color: var(--color-bg-container);
}

.el-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.el-table__header {
  background-color: var(--color-fill-light);
}

.el-table__header th {
  font-weight: 600;
  color: var(--color-text-secondary);
  text-align: left;
}

.el-table__cell {
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border-lighter);
  transition: background-color var(--transition-fast);
}

.el-table__header .el-table__cell {
  border-bottom: 1px solid var(--color-border-light);
}

.cell {
  padding: 0 16px;
  font-size: var(--font-size-base);
  line-height: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.el-table__body .el-table__row:last-child .el-table__cell {
  border-bottom: none;
}

.el-table__row {
  transition: background-color var(--transition-fast);
}

.el-table__row:hover {
  background-color: var(--color-fill-light);
}

.el-table__row--striped {
  background-color: var(--color-fill-lighter);
}

.el-table__row--striped:hover {
  background-color: var(--color-fill-light);
}

/* 空状态 */
.el-table__row--empty .el-table__cell {
  border-bottom: none;
}

.el-table__empty-block {
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-table__empty-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
}

.empty-icon {
  width: 80px;
  height: 80px;
  opacity: 0.6;
}

/* 行动画 */
.el-table-row-enter-active {
  animation: el-table-row-in var(--transition-normal);
}

.el-table-row-leave-active {
  animation: el-table-row-out var(--transition-fast);
}

@keyframes el-table-row-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes el-table-row-out {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
