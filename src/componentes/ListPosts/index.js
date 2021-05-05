import React from 'react';
import {TouchableOpacity, View, Dimensions} from 'react-native';
import PostCard from './PostCard';

let {width} = Dimensions.get('window');

const ListPosts = (props) => {
  const {item} = props;

  return (
    <TouchableOpacity style={{width: '50%'}}>
        <PostCard {...item}/>
    </TouchableOpacity>
  );
}

export default ListPosts;