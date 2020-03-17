import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { 
  AvailableRow, 
  HostInfo, 
  HostLanguageAutosuggest,
  Image
} from 'components'
import ImageUploader from 'react-images-upload'
import api from 'services/api'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { moveObjectFieldToArray } from 'utils/helpers'
import { palette, ifProp } from 'styled-tools'
import 'react-toastify/dist/ReactToastify.css'

const Wrapper = styled.div`
	padding: 0.8rem 1.2rem;
	border: 1px dotted ${palette('grayscale', 3)};
	border-bottom-left-radius: 0.8rem;
	border-bottom-right-radius: 0.8rem;
  display: ${ifProp('hidden', 'none')};
  width: 77%;
  margin: -1.3rem auto;

  @media screen and (max-width: 500px) {
    margin-top: -0.6rem;
    margin-bottom: 10px;
  }
`

const ImageWrapper = styled.div`
	margin: 0 auto;
	max-width: 300px;
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	-webkit-transition:0.3s all ease;
	transition:0.3s ease all;

	&:hover {
		span {
			top: 0;
		}
  }
  
  @media screen and (max-width: 700px) {
    margin-bottom: 30px;
  }
`

const HoverImage = styled.span`
	color: #fff;
	position: absolute;
	height: 100%;
	top: -100%;
	width: 100%;
	left: 0;
	background-color: #000;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.7;
	font-size: 30px;
	cursor: pointer;
`

const useStyles = makeStyles(theme => ({
  button: {
    display: 'flex',
    marginLeft: 'auto',
    '@media (max-width:500px)': {
      marginLeft: '70%'
    }
  }
}))

const EditHostForm = ({
  handleSubmit, 
  hostInfo,
  ...props
}) => {
  const classes = useStyles()  
  const [explanationOpen, setExplanationOpen] = useState('')

  const handleFocusField = (fieldName) => {
		setExplanationOpen(fieldName)
  }

  const uploadImageToBlob = (requestBody) => {
		api.post('/UploadFile', requestBody)
			.then(json => {
				const response = JSON.parse(json.d)
				if (response.statusCode >= 400) {
					console.error(response.message)
					return
				}
        props.updateAttribute('profile_image', response.url)
			})
			.catch(err => {
				console.error('cannot upload photo:', err)
			})
	}

	const onDrop = (pictureFiles, pictureDataURLs) => {
		if (!pictureDataURLs) {
			return
		}
		let requestBody
		for (let i = 0; i < pictureDataURLs.length; i++) {

			requestBody = {
				str_contents: pictureDataURLs[i].split(',')[1],
				filename: pictureFiles[i].name,
				action_type: 2,
			}
			uploadImageToBlob(requestBody)
		}
  }
  
  const removeImage = () => {
		props.updateAttribute('profile_image', '')
	}
  
  return (
    <form onSubmit={handleSubmit}>
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        size='large'
        className={classes.button}
      >
        Save
      </Button>
      <HostInfo 
        title="Tag Line" 
        watermark="Help travelers know you. (max: 100 characters)" 
        limit="100"
        value={hostInfo.tagline}
        onChange = {(e) => props.updateAttribute('tagline', e.target.value)}
      />
      <HostInfo 
        title="About Me" 
        watermark="Give more details about yourself and your background, interests, hobbies and passtions. (max: 1000 characters)" 
        limit="1000"
        value={hostInfo.about_me}
        onChange = {(e) => props.updateAttribute('about_me', e.target.value)}
      />
      <HostInfo 
        title="Best Way To Reach" 
        watermark="Give InstaHop different methods to contact you: Whatsapp, Skype, ToTok, etc. (max: 1000 characters)" 
        limit="1000"
        value={hostInfo.best_way_to_reach}
        onChange = {(e) => props.updateAttribute('best_way_to_reach', e.target.value)}
      />
      <HostInfo 
        title="Education / Work Experience" 
        limit="2000"
        value={hostInfo.education_work_experience}
        onChange = {(e) => props.updateAttribute('education_work_experience', e.target.value)}
      />
      <HostInfo 
        title="How Heard About Us" 
        limit="2000"
        value={hostInfo.how_heard_about_us}
        onChange = {(e) => props.updateAttribute('how_heard_about_us', e.target.value)}
      />
      <HostInfo 
        title="Language" 
        limit="2000"
        // value = {() => hostInfo.languages.toString().replace(/,/g, ' | ') || ''}
        value={hostInfo.languages}
        readOnly
        onFocus={() => handleFocusField('languages')}
      />
      <Wrapper hidden={explanationOpen !== 'languages'} >
        <HostLanguageAutosuggest hostInfo={hostInfo} {...props} />
      </Wrapper>

      <AvailableRow weekday="Monday" 
        start={hostInfo.availability_monday_start} 
        end={hostInfo.availability_monday_end}
        {...props}
      />
      <AvailableRow weekday="Tuesday" 
        start={hostInfo.availability_tuesday_start} 
        end={hostInfo.availability_tuesday_end}
        {...props}
      />
      <AvailableRow weekday="Wednesday" 
        start={hostInfo.availability_wednesday_start} 
        end={hostInfo.availability_wednesday_end}
        {...props}
      />
      <AvailableRow weekday="Thursday" 
        start={hostInfo.availability_thursday_start} 
        end={hostInfo.availability_thursday_end}
        {...props}
      />
      <AvailableRow weekday="Friday" 
        start={hostInfo.availability_friday_start} 
        end={hostInfo.availability_friday_end} 
        {...props}
      />
      <AvailableRow weekday="Saturday" 
        start={hostInfo.availability_saturday_start} 
        end={hostInfo.availability_saturday_end} 
        {...props}
      />
      <AvailableRow weekday="Sunday" 
        start={hostInfo.availability_sunday_start} 
        end={hostInfo.availability_sunday_end}
        {...props}
      />
      <ImageUploader
        withIcon={false}
        buttonText='Upload Host Profile Image'
        onChange={onDrop}
        maxFileSize={5242880}
        label=''
      />
      {hostInfo.profile_image &&
        <ImageWrapper onClick={() => removeImage()}>
          <Image imgSrc={hostInfo.profile_image}/>
          <HoverImage>Remove</HoverImage>
        </ImageWrapper>
      }
    </form>
  )
}

export default EditHostForm