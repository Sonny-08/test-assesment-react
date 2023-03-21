import AUTH_API from "../auth";

const UserServices = {
  async user_list() {
    return await AUTH_API.get(`testapi/user`);
  },

  async add_user(data) {
    return await AUTH_API.post(`testapi/user`, data);
  },

  async view_user(id) {
    return await AUTH_API.get(`testapi/user/${id}`);
  },

  async edit_user(id, data) {
    return await AUTH_API.put(`testapi/user/${id}`, data);
  },

  async delete_user(id) {
    return await AUTH_API.delete(`testapi/user/${id}`);
  },
};

export default UserServices;
