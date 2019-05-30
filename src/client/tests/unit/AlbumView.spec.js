import { mount } from '@vue/test-utils';
import AlbumView from '@/components/AlbumView.vue';

const FAKE_ALBUM = {
  id: 1,
  name: 'Fake Album',
  description: 'It is not real',
  date: '2017-06-22',
  location: 'ST. PETERSBURG',
  model: {
    firstName: 'Your',
    lastName: 'Name',
  },
};

const $route = {
  params: { id: 1 },
};

describe('AlbumView.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(AlbumView, { mocks: { $route } });
    wrapper.setData({ album: FAKE_ALBUM });
    expect(wrapper.text()).toMatchSnapshot();
  });
});
