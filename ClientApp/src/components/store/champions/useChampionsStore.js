import { useSelector } from 'react-redux';

export default function useChampionsStore(repository) {
    const { loading, data } = useSelector(state => state.champions);

    const isLoading = () => loading === 'pending';

    return [
        data,
        isLoading
    ];
};
