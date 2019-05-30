import { mount } from '@vue/test-utils';
import AlbumPreview from '@/components/AlbumPreview.vue';

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

describe('AlbumPreview.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(AlbumPreview, { propsData: { album: FAKE_ALBUM } });
    expect(wrapper.text()).toMatchSnapshot();
  });
});
