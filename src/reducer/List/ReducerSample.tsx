import produce from 'immer';

interface Sample {
	data: number[];
}

const initialState: Sample = {
	data: [],
};

export const SAMPLE_REQUEST = 'SAMPLE_REQUEST';
export const SAMPLE_SUCCESS = 'SAMPLE_SUCCESS';
export const SAMPLE_FAILURE = 'SAMPLE_FAILURE';

const ReducerSample = (state: Sample = initialState, action: any) => {
	return produce(state, draft => {
		switch (action.type) {
			case SAMPLE_REQUEST: {
				break;
			}
			case SAMPLE_SUCCESS: {
				const getNumber = action.data;
				draft.data.push(getNumber);
				break;
			}
			case SAMPLE_FAILURE: {
				break;
			}
			default: {
				break;
			}
		}
	});
};

export default ReducerSample;
