import React, {useContext, useEffect, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {LocationContext} from '../../services/location/location-context';
import {SearchBarContent} from './styles';

const Search = () => {
  const {search} = useContext<any>(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchBarContent>
      <Searchbar
        placeholder="Search"
        value={searchKeyword}
        onSubmitEditing={() => {
          console.log(searchKeyword);
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </SearchBarContent>
  );
};

export default Search;
