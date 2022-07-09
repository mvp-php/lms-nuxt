<template>
<span>
 
</span>
  
</template>

<script>

export default {
    name: 'create-user',
    components: {
  

    },
    data() {
        return {
            hides: true,
            hidesins: true,
          

        }
    },
   computed: {
        form() {
            let theUser = new FormData();
             console.log(this.files);
            this.files.forEach((file, index) => {
            theUser.append('csv_file', file);
            });

            return theUser;
        }
    },
    props: ['theUser'],
    methods: {
        handleSelectedFiles() {
        let selectedFiles = this.$refs.fileInput.files;
        
        
      },

    }
}
</script>