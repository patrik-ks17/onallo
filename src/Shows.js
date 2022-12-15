import styled from 'styled-components'
import { Detail } from './Functions';

const Shows = () => {
	return (
	   Movies.map((item, index) => (
			<Show show={item} key={index} />
		))
	);
}
export default Shows

const Show = (props) => {
	const {show} = props;
		return (
		<ShowContainer className='link'  onClick={() => Detail(show)}>
			<div>
				<img src={show.img} alt={show.title}/>
			</div>
			<Title>{show.title}</Title>
			<Category>{show.category}</Category>
		</ShowContainer>
		)
}


const Title = styled.div`
`
const Category = styled.div`
`
const ShowContainer = styled.div`
	margin: 50px;
	text-align: center;	
	display: inline-block;
`



const Movies = [
	{
		"title": "Money Heist",
		"category": "Action",
		"details": "This Spanish import isn't just one of the most popular non-English series on Netflix, it's a worldwide phenomenon. About a group of robbers who plan an elaborate heist, the show has inspired fans to dress in the cast's signature ensemble to carry out various pranks, and even try to emulate their plans in real life. Few shows have that kind of pull. Money Heist, aka La Casa de Papel, is one of the best heist thrillers running today, though, documenting in real-time a plan to take hostages in the Royal Mint of Spain in order to print and steal money. Every moment is exhilarating as the heist unfolds, and the characters behind their masks, each with their own emotional turmoil, make the series as intelligent as it is heart-pounding. Let the Money Heist obsession inspire you to maybe not rob a bank, but take over.",
		"released": "2017-2022",
		"img": "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg"
	},{
		"title": "Lupin",
		"category": "Action",
		"details": "Each episode of Netflix's Lupin, a nimble caper series starring Omar Sy (The Intouchables) as gentleman thief Assane Diop, builds to the type of rug-pulling flashback that you might find at the end of an Ocean's movie. Disguises are ripped off; diamonds get pocketed; the dashing hero slips away, again It's a classic heist movie device that could get repetitive or predictable, but, through the mercifully fast-paced episodes, Lupin and its endlessly charming leading man execute each reveal with a high degree of finesse. With a show like this, getting fooled is half the fun.",
		"released": "2021-present",
		"img": "https://m.media-amazon.com/images/M/MV5BZjEyMmUyYmYtNTAwYi00OWUwLWJlNzEtMDM2N2QxNzIwMTdjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
	},{
		"title": "The Tinder Swindler",
		"category": "Documentary",
		"details": "We've all seen guys on Tinder that are maybe a little too good to be true. Pictures of a jet-setting lifestyle, expensive watches and suits, a perfectly manicured life. But for some, it's about the potential to find their ideal man and where some might swipe left, others will eagerly swipe right to give it a chance. Such is the beginning of Simon Leviev's con. Luring in women and love-bombing them with gifts, extravagant trips, and declarations of love, it's not long before a woman is falling in love with the charismatic Simon and soon sending money to him when he suddenly become injured by an attack from his 'enemies'. Where The Tinder Swindler succeeds is showing just how easily a man can con women and control them, manipulating them into sending hundreds of thousands in cash to him on some lie. Using his victims to fuel his expensive lifestyle, Simon is a dangerous predator, and one that continues to operate today much to the chagrin of this critic. The Tinder Swindler is a constant reminder that conmen will do anything to completing their con and trust is not something that should easily be won in the world of online dating. — Therese Lacson",
		"released": "2022",
		"img": "https://m.media-amazon.com/images/M/MV5BMTkwMTg2YWYtOGU5MS00YTdhLTg4N2QtYzcyZDE0MTlmNDU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
	},{
		"title": "Return to Space",
		"category": "Documentary",
		"details": "Return to Space is a documentary movie that follows SpaceX engineers and Elon Musk's 20-year journey to send NASA astronauts back to space and revolutionize space travel. ",
		"released": "2022",
		"img": "https://m.media-amazon.com/images/M/MV5BNTBiZTFlMTItZTg2MS00MmNjLThkMjEtMDk5NGU4NmYxODEwXkEyXkFqcGdeQXVyNTM5MTg5NjA@._V1_FMjpg_UX1000_.jpg"
	},{
		"title": "Schumacher",
		"category": "Documentary",
		"details": "Through exclusive interviews and archival footage, this documentary traces an intimate portrait of seven-time Formula 1 champion Michael Schumacher.",
		"released": "2021",
		"img": "https://m.media-amazon.com/images/M/MV5BOWUzYzBjNjAtN2RlNC00YWE5LThlMDEtMjhlOTQwYTY4NTlmXkEyXkFqcGdeQXVyMTI5Nzk4NDQ4._V1_.jpg"
	},{
		"title": "Resident Evil",
		"category": "Horror",
		"details": "Based on the hit horror franchise and developed by Andrew Dabb (Supernatural), Resident Evil continues the story of the t-virus outbreak, picking up nearly three decades after its discovery. The series, which stars Ella Balinska (Charlie’s Angels), Tamara Smart (Artemis Fowl), and Siena Agudong (No Good Nick), dives deeper into the mythology of the Resident Evil franchise, peeling back layers to expose the dark secrets of the mysterious Umbrella Corporation. An ideal companion to the films, Resident Evil provides context for the lore and builds upon the original story, enhancing the viewing experience for true fans. – Yael Tygiel",
		"released": "2022",
		"img": "https://m.media-amazon.com/images/M/MV5BZjQ5ZmI2YTEtNDUyYi00ZTVjLThmNWQtY2E5MDEwZjNlNzcyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
	},{
		"title": "Wednesday",
		"category": "Horror",
		"details": "Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart and solve the mystery that embroiled her parents.",
		"released": "2022",
		"img": "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
	},{
		"title": "The Last Dance",
		"category": "Sport",
		"details": "No sports docuseries, with the possible exception of O.J.: Made in America, had such an immediate impact on popular culture like The Last Dance. The film features unearthed footage of Michael Jordan and the Chicago Bulls’ 1997-98 season coupled with modern-day interviews with MJ and his contemporaries. The memes were nearly instantaneous: MJ holding an iPad and laughing as other players meekly attempt to talk trash about him, MJ declaring, “And I took that personally.” Then, one of MJ’s security guards beating him in a game of dice and then mockingly shrugging at the camera. The series is packed with memorable moments, even beyond the dramatic playoff victories and old heated rivalries. There is no sports doc more entertaining or addictive than this one.",
		"released": "2021",
		"img": "https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
	},{
		"title": "Formula 1: Drive to Survive",
		"category": "Sport",
		"details": "It’s hard to think of a docuseries that has had a more profound impact on its sport than Formula 1: Drive to Survive. The series has dramatically increased F1’s popularity in the States and ignited heated debate over its sometimes sensationalistic storytelling. But it serves a very practical purpose as well: getting ordinary people to understand F1. Perhaps aptly thought of as “a thinking man’s NASCAR,” F1 tends to strike many autosports fans as a bit too nerdy, pretentious, and *shudder* European. But it is by far the premier motorsport in the world with a long, treasured history. Drive to Survive provides an intimate look at F1 as we’ve never seen it before.",
		"released": "2019-present",
		"img": "https://m.media-amazon.com/images/M/MV5BMzVkMGU0YWMtOWQxMC00MjFhLTg1NjAtMDFlZTZlYzJlMjlhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
	}
]
