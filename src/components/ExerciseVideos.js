import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos || exerciseVideos.length === 0) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '10px' } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item?.video?.videoId || ''}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: '20px' }}
              src={item?.video?.thumbnails?.[0]?.url || '/fallback-image.jpg'}
              alt={item?.video?.title || 'Exercise video'}
            />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item?.video?.title || 'No title available'}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item?.video?.channelName || 'Unknown channel'}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

ExerciseVideos.propTypes = {
  exerciseVideos: PropTypes.arrayOf(
    PropTypes.shape({
      video: PropTypes.shape({
        videoId: PropTypes.string,
        title: PropTypes.string,
        channelName: PropTypes.string,
        thumbnails: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string,
          }),
        ),
      }),
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
};

export default ExerciseVideos;
