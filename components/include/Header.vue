<template>
    <header>
        <div class="header-main">
            <div class="header-inner">
                <div class="logo">
                    <img src="../../assets/img/logo-blue.png" class="logo-blue mb-20" alt="logo-blue">
                </div>
                <div>
                    <img src="../../assets/img/svg/avtar1.svg" class="header-profile" alt="avtar-header">
                </div>
            </div>
        </div>
    </header>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>