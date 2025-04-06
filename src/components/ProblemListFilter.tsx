import React from "react";

interface ProblemFilterHeaderProps {
    search: string;
    setSearch: (val: string) => void;
    category: string;
    setCategory: (val: string) => void;
    difficulty: string;
    setDifficulty: (val: string) => void;
    status: string;
    setStatus: (val: string) => void;
}

const ProblemFilterHeader: React.FC<ProblemFilterHeaderProps> = ({
    search,
    setSearch,
    category,
    setCategory,
    difficulty,
    setDifficulty,
    status,
    setStatus
}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <input
                type="text"
                placeholder="Search problem..."
                className="input input-bordered w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                className="select select-bordered w-full"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">All Categories</option>
                <option value="Array">Array</option>
                <option value="Tree">Tree</option>
                <option value="Graph">Graph</option>
            </select>

            <select
                className="select select-bordered w-full"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            >
                <option value="">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>

            <select
                className="select select-bordered w-full"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="">All Status</option>
                <option value="Solved">Solved</option>
                <option value="Attempted">Attempted</option>
                <option value="Unsolved">Unsolved</option>
            </select>
        </div>
    );
};

export default ProblemFilterHeader;
