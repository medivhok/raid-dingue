import sliceBuilder from './sliceBuilder';

const processSliceEntry = (sliceEntry = []) => {
    const [name, repository] = sliceEntry;
    return [name, sliceBuilder({ name, repository })];
};

const processSliceEntries = (sliceEntries = []) => {
    return sliceEntries.map(processSliceEntry);
};

export default function sliceBatchBuilder(slices = {}) {
    return Object.fromEntries(processSliceEntries(Object.entries(slices)));
};
