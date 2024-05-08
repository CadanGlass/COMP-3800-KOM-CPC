import React from 'react';
import { Text } from '@chakra-ui/react';
import VolunteeringActivitiesCard from '../components/volunteer/VolunteeringActivitiesCard';

const volunteerData = [
	{
		title: 'Volunteer Patrols',
		description:
			'Our high visibility volunteer patrols are our best-known activity. Utilizing current and historic crime data, as well as inputs from residents, patrols are dispatched into neighbourhoods to be ‘eyes and ears’ for the community, and a deterrent. Patrols also provide awareness to residents in the event of heightened criminal activity, and are happy to answer any questions. Certain patrols also conduct ICBC Speed Watch or Vehicle Audits. Patrols take place on foot or bicycle, and can be conducted during the day or night. Volunteers are continually trained and educated on proper protocol. Patrols do not intervene in criminal activity and do not perform arrests.',
	},
	{
		title: 'Event Participation',
		description: 'Volunteer Description 2',
	},
	{
		title: 'VPD Program Organization & Support',
		description:
			'Working closely with the Vancouver Police Department, KOM CPC volunteers help organize and support public safety initiatives. Programs such as the VPD Women’s Safety Workshop and Project 529 owe their success to the efforts of community policing volunteers.',
	},
];
const title = 'Volunteering Activities';
const description =
	'Community policing volunteers participate in a number of activities for the KOM CPC. We encourage all volunteers to try each one, so they can experience our organization to the fullest. For a full list of activities, visit our Programs page.';

export default function VolunteerPage() {
	return (
		<>
			<VolunteeringActivitiesCard
				volunteerData={volunteerData}
				title={title}
				description={description}
			/>
		</>
	);
}
