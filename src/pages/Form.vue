<script>
import axios from 'axios';
export default {
    name: "Form",
  data() {
    return {
        categories: [],
        tags: [],

        newPost: {
        title: '',
        content: '',
        category: '',
        image: null, 
        tags: []
      },

      successAlertIsVisible: false,
      warningAlertIsVisible: false,
    }
  },


  methods: {
   getCategories() {
    axios.get('http://localhost:3000/categories').then(res => {
        this.categories = res.data;
    }).catch(err => {
        console.log(err)
    })
   },


   getTags() {
     axios.get('http://localhost:3000/tags').then(res => {
         this.tags = res.data;
     }).catch(err => {
         console.log(err)
     })
    },

    
    setSuccessAlert() {
        this.successAlertIsVisible = true
        setTimeout(() => {
            this.successAlertIsVisible = false
        }, 5000);
    },

    setWarningAlert() {
        this.warningAlertIsVisible = true
        setTimeout(() => {
            this.warningAlertIsVisible = false
        }, 5000);
    },

    createPost() {
        if (!this.newPost.title || !this.newPost.content || !this.newPost.category) {
            console.log("You got to complete every field");
            this.setWarningAlert()
            return;
        }

         axios.post('http://localhost:3000/posts', this.newPost).then(res => {
            console.log('New post saved!')
            this.setSuccessAlert()
        }).catch(err => {
            console.log(err)
        })
    },
  },

  mounted() {
    this.getTags();
    this.getCategories();
  }


}
</script>

<template>
    <div id="form-container">

        <!-- ALERTS -->
        <div class="alert success" @click="this.successAlertIsVisible == false" v-show="this.successAlertIsVisible">
            <span class="alertText">New post correctly created!
            <br class="clear"/></span>
        </div>

        <div class="alert warning" @click="this.warningAlertIsVisible == false" v-show="this.warningAlertIsVisible">
            <span class="alertText">Errors in some fields
            <br class="clear"/></span>
        </div>
        <!-- ///// -->


    <form class="bg-black bg-opacity-60 p-7 m-3 w-[50%]" @submit.prevent="this.createPost">
    <div>
        <div class="border-b border-gray-900/10">
            <h2 class="text-base font-semibold leading-7 text-white-900">Add a new Post</h2>
            <p class="text-sm leading-6 text-white-600">Ensure all fields are filled in</p>
        </div>

        <div class="border-b border-white-900/1">
             <h2 class="text-base font-semibold leading-7 text-white-900">Post informations</h2>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">

            <!-- TITLE -->
            <div class="sm:col-span-3">
                <label for="title" class="block text-sm font-medium leading-6 text-white-900">Post Title</label>
                <div class="mt-2">
                    <input v-model="this.newPost.title" type="text" name="title" id="title" class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <!-- CATEGORY -->
            <div class="sm:col-span-3">
                <label for="category" class="block text-sm font-medium leading-6 text-white-900">Category</label>
                <div class="mt-2">
                    <select v-model="this.newPost.category" id="category" name="category" class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option v-for="category in this.categories" :value="category.id" class="text-white">{{ category.name }}</option>
                    </select>
                </div>
            </div>

            <!-- TAGS -->
            <div class="sm:col-span-full">
                <div>
                    <label for="tags" class="block text-sm font-medium leading-6 text-white-900">Tags</label>
                    <div v-for="tag in tags" :key="tag.id">
                        <input type="checkbox" :id="tag.id" v-model="this.newPost.tags" :value="tag.id" />
                        <label :for="tag.id">{{ tag.name }}</label>
                    </div>
                </div>
            </div>


            <!-- CONTENT -->
            <div class="col-span-full">
                <label for="content" class="block text-sm font-medium leading-6 text-white-900 ">Description</label>
                <div class="mt-2">
                    <textarea v-model="this.newPost.content" name="content" id="content" class="h-[100px] block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 place-items-start"></textarea>
                </div>
            </div>

            <!-- PICTURE -->
            <div class="col-span-full">
                <label for="cover-photo" class="block text-sm font-medium leading-6 text-white-900">Cover photo</label>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-white-900/25 px-6 py-10">
                    <div class="text-center">
                    <svg class="mx-auto h-12 w-12 text-white-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                    </svg>
                    <div class="mt-4 flex text-sm leading-6 text-white-600">
                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only">
                        </label>
                        <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-white-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
            </div>

        </div>
        </div>

    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
    </form>

</div>
</template>

<style lang="scss">
//centered container model
  @mixin centeredFlexContainer () {
    display: flex;
    justify-content: center;
    align-items: center;
  }
/////////

  #form-container {
    position: relative;
    margin: 0 auto;
    @include centeredFlexContainer();
    flex-flow: column;
    
    width: 100%;
    height: 100%;

    background-image: url('/public/imgs/formback.png');

    .alert {
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        line-height: 1.8;
        border-radius: 5px;
        cursor: hand;
        cursor: pointer;
        font-family: sans-serif;
        font-weight: 400;

        &.success {
            border: 1px solid #DED;
            color: rgb(137, 173, 137);
            background-color: #eeffee;
        }

        &.warning {
            background-color: #d16161;
            border: 1px solid #fe6f6f;
            color: rgba(37, 35, 35, 0.63);
        }
    }
 }
</style>
