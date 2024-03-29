import * as z from "zod";
import { SearchInputContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchFormInputProps {
    postsLenght: number;
    getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({ postsLenght, getPosts }: SearchFormInputProps) {
    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchPosts(data: SearchFormInput) {
        await getPosts(data.query)
    }

    return (
        <>
            <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
                <header>
                    <h3>Publicações</h3>
                    <span>{postsLenght} publicações</span>
                </header>

                <input type="text" placeholder="Buscar contéudo" {...register('query')}/>
            </SearchInputContainer>
        </>
    )
}