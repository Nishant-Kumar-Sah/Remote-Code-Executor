
import { useEffect, useState } from "react";
import ProblemFilterHeader from "../../components/ProblemListFilter";
import { fetchAllProblems } from "../../apis/problemApi";


interface Problem {
    _id: string;
    title: string;
    difficulty: string;
    description?: string;
    tags?: string[];
    category?: string; // optional for now
    status?: string;   // optional/dummy for now
}


function ProblemList() {
    const [search, setSearch] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    const [problems, setProblems] = useState<Problem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    // const problems: Problem[] = [
    //     { title: "Two Sum", category: "Array", difficulty: "Easy", status: "Solved" },
    //     { title: "Binary Tree Paths", category: "Tree", difficulty: "Medium", status: "Unsolved" },
    //     { title: "Word Ladder", category: "Graph", difficulty: "Hard", status: "Attempted" },
    // ];
    useEffect(() => {
        const getProblems = async()  => {
            try {
                setLoading(true);
                const data = await fetchAllProblems();
                console.log(`API response while fetching problems : ${data}`)
                setProblems(data);
            }catch(error){
                console.error(`Error while fetching problems : ${error}`)
                setError("Failed to load problems");
            }finally {
                setLoading(false);
            }
        };
        getProblems();
    },[]);

    const filteredProblems = problems.filter((problem) => {
        return (
            problem.title.toLowerCase().includes(search.toLowerCase()) &&
            (category ? problem.category === category : true) &&
            (difficulty ? problem.difficulty === difficulty : true) &&
            (status ? problem.status === status : true)
        );
    });

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Problems</h1>

            <ProblemFilterHeader
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                status={status}
                setStatus={setStatus}
            />

            {loading ? (
                <div className="text-center py-10">Loading problems...</div>
            ) : error ? (
                <div className="text-center text-red-600 py-10">{error}</div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Difficulty</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProblems.map((problem) => (
                                <tr key={problem._id}>
                                    <td className="text-blue-600 cursor-pointer hover:underline">
                                        {problem.title}
                                    </td>
                                    <td>{problem.tags?.[0] || "N/A"}</td>
                                    <td>{problem.difficulty}</td>
                                    <td>-</td> {/* Replace with real status later */}
                                </tr>
                            ))}
                            {filteredProblems.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="text-center py-4">
                                        No problems found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ProblemList;
















// import CollapsableTopicProblem from "./CollapsableTopicProblems";
// import SampleProblemList from "../../constants/SampleProblemList";
// import { ProblemData } from "../../types/problem.types";

// type Topic = {
//     topic: string;
//     topicId: string;
//     problems: ProblemData[];
// }

// function ProblemList() {

//     return (
//         <div className="flex justify-center items-center w-[100vw]">

//             <div className="topic-list flex flex-col w-[60%]">
                    
//                    {SampleProblemList.map((topic: Topic) => <CollapsableTopicProblem topicName={topic.topic} key={topic.topicId} problems={topic.problems}/>)}
//             </div>


//         </div>
//     )
// }

// export default ProblemList;