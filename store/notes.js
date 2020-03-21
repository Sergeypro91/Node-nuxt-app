/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

export const state = () => ({
  notesHeight: null,
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
})

export const mutations = {
  notesHeight(state, i) {
    state.notesHeight = i
  }
}
