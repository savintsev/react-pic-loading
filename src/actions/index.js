export const fetchPic = () => ({
  type: 'FETCH_PIC'
});

export const deletePic = (id) => ({
  type: 'DELETE_PIC',
  id
});

export default {
  fetchPic,
  deletePic
};
