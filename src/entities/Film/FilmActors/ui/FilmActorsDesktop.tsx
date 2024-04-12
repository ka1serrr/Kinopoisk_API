import { useActorsQuery } from "@/entities";
import { useParams } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@/shared";
import { NO_DATA_TEXT } from "@/app";

export const FilmActorsDesktop = () => {
  const { id } = useParams();

  const { data, fetchNextPage, hasNextPage } = useActorsQuery(Number(id));

  const content = data?.pages?.map((actors) =>
    actors.docs.map((actor) => (
      <div className='w-[120px] min-h-[220px] flex flex-col justify-between'>
        {actor?.photo ? (
          <img src={actor.photo} alt={`Фото ${actor.name}`} />
        ) : (
          <img src='/no_avatar.png' alt='No photo' />
        )}
        <span>{actor.name}</span>
      </div>
    )),
  );

  const areActorsUnAvailable = data?.pages[0]?.total === 0;

  return (
    <>
      {areActorsUnAvailable ? (
        <h3 className='font-bold text-2xl'>{NO_DATA_TEXT.noData} об актёрах</h3>
      ) : (
        <Accordion type='single' collapsible className='w-1/2'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              <span className='w-full font-bold text-center text-2xl'>Список актёров</span>
            </AccordionTrigger>
            <AccordionContent className='px-8'>
              <div className='flex gap-2.5 flex-wrap'>{content}</div>
              <div className='flex items-center justify-center mt-3'>
                {hasNextPage && (
                  <Button variant='ghost' onClick={() => fetchNextPage()}>
                    Загрузить ещё
                  </Button>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
};
