<template>
  <div ref="notes" class="notes" :style="{ height: notesBlockHeight + 'px' }">
    <div v-for="note in notes" :key="note.idNote" ref="note" class="note">
      <div class="note__header">
        <div class="note__title">
          <div class="h2">{{ note.title }}</div>
        </div>
        <div class="note__type-change">
          <div class="note__type-change_standart"></div>
          <div class="note__type-change_priority"></div>
          <div class="note__type-change_important"></div>
          <div class="note__close">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="note__body">
        <div class="p">{{ note.description }}</div>
      </div>
      <div class="note__footer">
        <div class="note__auhtor">
          <div class="note__auhtor-img">
            <img src="~/static/img/users/user1.jpg" alt="" />
          </div>
          <div class="note__auhtor-info">
            <div class="p">{{ note.author.name }}</div>
            <div class="p_extra-small">{{ note.publishTime }}</div>
          </div>
        </div>
        <div class="btn btn_gray">
          <div class="btn__icon">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                transform="rotate(45.001 19.345 4.656)"
                d="M17.223 3.039H21.466V6.273H17.223z"
              />
              <path d="M8 16L11 16 18.287 8.713 15.287 5.713 8 13z" />
              <path
                d="M19,19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5h6.847l2-2H5C3.897,3,3,3.896,3,5v14 c0,1.104,0.897,2,2,2h14c1.104,0,2-0.896,2-2v-8.668l-2,2V19z"
              />
            </svg>
          </div>
          <button>Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notesBlockHeight: 0,
      notes: [
        {
          title: 'Some note title for test notes respons',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Ea accusamus architecto cumque nisi qui officiis? Cumque temporibus nulla iste alias dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Ea accusamus architecto cumque nisi qui officiis? Cumque temporibus nulla iste alias dolorum.',
          author: {
            name: 'Sergeyprostoas',
            img: '~/static/img/users/user1.jpg'
          },
          publishTime: new Date(Date.now()).toLocaleString()
        },

        {
          title: 'Some note title for test notes respons',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat.',
          author: {
            name: 'Sergeyprostoas',
            img: '~/static/img/users/user1.jpg'
          },
          publishTime: new Date(Date.now()).toLocaleString()
        },

        {
          title: 'Some note title for test notes respons',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat.',
          author: {
            name: 'Sergeyprostoas',
            img: '~/static/img/users/user1.jpg'
          },
          publishTime: new Date(Date.now()).toLocaleString()
        },

        {
          title: 'Some note title for test notes respons',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          author: {
            name: 'Sergeyprostoas',
            img: '~/static/img/users/user1.jpg'
          },
          publishTime: new Date(Date.now()).toLocaleString()
        },

        {
          title: 'Some note title for test notes respons',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat.',
          author: {
            name: 'Sergeyprostoas',
            img: '~/static/img/users/user1.jpg'
          },
          publishTime: new Date(Date.now()).toLocaleString()
        },

        {
          title: 'Some note title for test notes respons',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Ea accusamus architecto cumque nisi qui officiis? Cumque temporibus nulla iste alias dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Ea accusamus architecto cumque nisi qui officiis? Cumque temporibus nulla iste alias dolorum.',
          author: {
            name: 'Sergeyprostoas',
            img: '~/static/img/users/user1.jpg'
          },
          publishTime: new Date(Date.now()).toLocaleString()
        }
      ]
    }
  },

  mounted() {
    this.matchHeight()
  },

  methods: {
    matchHeight() {
      const numberOfNotes = this.$refs.note.length
      const margin = 15
      const notesBlockHeight = []

      for (let j = 0; j < 3; j += 1) {
        let notesColumnHeight = 0
        let notesColumnCount = 0

        for (let i = j; i < numberOfNotes; i += 3) {
          notesColumnHeight += this.$refs.note[i].clientHeight
          notesColumnCount += 1
        }

        notesBlockHeight.push(notesColumnHeight + margin * notesColumnCount)
      }

      const ansver = (numArray) => {
        return Math.max.apply(null, numArray)
      }

      this.notesBlockHeight = ansver(notesBlockHeight)

      console.log(this.notesBlockHeight)
    }
  }
}
</script>
