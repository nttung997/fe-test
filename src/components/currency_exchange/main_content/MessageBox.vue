<template>
  <div class="form-group mt-5">
    <label class="px-2">Title</label>
    <b-form-input class="py-4" placeholder="Please buy new clothes and have fun!"></b-form-input>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.form-group{
  border: 1px solid #2E3A42;
  border-radius: 4px;
  position: relative;
}
.form-group>label{
  position:absolute;
  top:-1rem;
  left:20px;
  background-color:white;
}

.form-group>input{
  border:none;
}
</style>