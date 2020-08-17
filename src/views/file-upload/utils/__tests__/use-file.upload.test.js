import { useFileUpload } from '../';

const MOCKED_DATA = [['data'], ['data']];

describe('useFileUpload', () => {
  xit('upload file',  () => {
    const coordinates = useFileUpload(MOCKED_DATA);
  
    expect(coordinates).toHaveLength(2);
  });

    // it('should invoke upload', () => {
  //   const { wrapper } = setup();

  //   wrapper.find('input').simulate('change', {
  //     target: {
  //        files: ['file']   
  //     }
  //   });
  
  //   expect(wrapper.find('input')).toHaveBeenCalled();
  // });
});
