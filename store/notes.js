/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

export const state = () => ({
  notesHeight: null,
  notesCounter: 6,
  notes: [
    {
      noteId: 1,
      title: 'Some note title for test notes respons1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Ea accusamus architecto cumque nisi qui officiis? Cumque temporibus nulla iste alias dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Ea accusamus architecto cumque nisi qui officiis? Cumque temporibus nulla iste alias dolorum.',
      author: {
        name: 'Sergeyprostoas',
        img: '~/static/img/users/user1.jpg'
      },
      publishTime: new Date(Date.now()).toLocaleString(),
      notePriority: 'priority'
    },

    {
      noteId: 2,
      title: 'Some note title for test notes respons',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat.',
      author: {
        name: 'Sergeyprostoas',
        img: '~/static/img/users/user1.jpg'
      },
      publishTime: new Date(Date.now()).toLocaleString(),
      notePriority: 'important'
    },

    {
      noteId: 3,
      title: 'Some note title for test notes respons',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat.',
      author: {
        name: 'Sergeyprostoas',
        img: '~/static/img/users/user1.jpg'
      },
      publishTime: new Date(Date.now()).toLocaleString(),
      notePriority: 'priority'
    },

    {
      noteId: 4,
      title: 'Some note title for test notes respons',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      author: {
        name: 'Sergeyprostoas',
        img: '~/static/img/users/user1.jpg'
      },
      publishTime: new Date(Date.now()).toLocaleString(),
      notePriority: 'standart'
    },

    {
      noteId: 5,
      title: 'Some note title for test notes respons',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat.',
      author: {
        name: 'Sergeyprostoas',
        img: '~/static/img/users/user1.jpg'
      },
      publishTime: new Date(Date.now()).toLocaleString(),
      notePriority: 'important'
    },

    {
      noteId: 6,
      title: 'Some note title for test notes respons6',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Ea accusamus architecto cumque nisi qui officiis? Cumque temporibus nulla iste alias dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos ducimus pariatur quo eius numquam sapiente doloremque asperiores placeat. Ea accusamus architecto cumque nisi qui officiis? Cumque temporibus nulla iste alias dolorum.',
      author: {
        name: 'Sergeyprostoas',
        img: '~/static/img/users/user1.jpg'
      },
      publishTime: new Date(Date.now()).toLocaleString(),
      notePriority: 'standart'
    }
  ]
})

export const mutations = {
  notesHeight(state, i) {
    state.notesHeight = i
  },

  addNote(state, note) {
    state.notesCounter += 1
    state.notes.unshift(note)
  },

  changePrioryty(state, data) {
    const index = state.notes.findIndex((obj) => obj.noteId === data.index)
    state.notes[index].notePriority = data.priorityType
  },

  destroyNote(state, id) {
    const index = state.notes.findIndex((obj) => obj.noteId === id)
    state.notes.splice([index], 1)
  }
}

export const actions = {
  changePrioryty({ commit }, data) {
    commit('changePrioryty', data)
  },

  destroyNote({ commit }, id) {
    commit('destroyNote', id)
  }
}

export const getters = {
  notes: (state) => state.notes
}
