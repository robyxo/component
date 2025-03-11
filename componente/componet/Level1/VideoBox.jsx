import { BoxVideo, PlayButton, DeleteIconBox, Title, ProgressBar, ImgDeleteBox} from './Style/styledVideoBox'
import play from '../assets/play.svg'
import trash from '../assets/Trash.svg'


function VideoBox() {
    return (
        <>
          <BoxVideo>
                    <PlayButton> <img src={play} alt="Play" /></PlayButton>
                    <DeleteIconBox><ImgDeleteBox src={trash} alt="Delete" /></DeleteIconBox>
                    <Title>This is a sample video title that gets truncated when it reaches the border.</Title>
              <ProgressBar style={{ width: '50%' }} />
            </BoxVideo>
      </>

  );
}

export default VideoBox;