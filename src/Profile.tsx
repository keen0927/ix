import React from 'react';

interface Props {
	name: string;
}
const Profile = ({ name }: Props) => {
	return (
		<div>
			<span>({name})</span>
		</div>
	);
};

export default Profile;
