import { getObservable } from 'ember-apollo-client';
import { get, set } from 'lodash';
import update from 'immutability-helper';

export const mapEdges = (data, { path }) => {
  if (!data) return null;

  return (
    path
      .split('.')
      .concat(['edges'])
      .reduce((obj, key) => obj[key], data)
      ?.map(({ node }) => node) ?? []
  );
};

export const loadMoreFactory = (data, { path }) => {
  const observable = getObservable(data);

  const { hasNextPage, endCursor } = path
    .split('.')
    .concat(['pageInfo'])
    .reduce((obj, key) => obj[key], data);

  if (!hasNextPage) return () => null;

  const options = {
    variables: { endCursor },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;
      const edgesPath = `${path}.edges`;
      const edges = get(prev, edgesPath);

      return update(fetchMoreResult, set({}, edgesPath, { $unshift: edges }));
    },
  };

  return () => observable.fetchMore(options);
};
