SELECT * FROM runners WHERE id NOT IN (SELECT winner_id FROM races) ORDER BY name asc
