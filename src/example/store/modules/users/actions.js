
//
//  context.commit() calls mutation()
//
export default {
  /**
   * @param {Object} context
   * @param {*} value
   */
  async fetchAll(context) {
    const { commit } = context;

    const entries = [
      {
        "id": 1,
        "name": "user-1"
      },
      {
        "id": 2,
        "name": "user-2"
      }
    ];

    return await new Promise(function (resolve, reject) {
      setTimeout(function() {

        // Save in the store
        commit("setEntries", entries);

        if (entries) {
          resolve(entries);
        }
        else {
          reject();
        }
      }, 1000);


    });
  },


  async fetchOneById(context, value) {
    const { commit } = context;

    const entry = {
      id: value,
      name: `user-${value}`
    };

    return await new Promise(function (resolve, reject) {
      setTimeout(function() {

        commit("setEntry", entry);

        if (entry) {
          resolve(entry);
        }
        else {
          reject();
        }

      }, 1000);
    });
  }
};
