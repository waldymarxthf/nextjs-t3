import { Title } from "@mantine/core";
import { useSession } from "next-auth/react";

export default function Roullete() {
	const session = useSession()
	return (
		<>
			{session.data && (
				<Title align="center" slot='1'>This is game for {session?.data.user.name}</Title>
			)}
		</>
	)
}