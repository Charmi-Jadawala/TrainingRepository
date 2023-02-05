-- Processing JSON: ISJSON
DECLARE @myJson nvarchar(max);
SET @myJson = N'[
	{
		"id": 1,
		"name": "John",
		"skills": ["SQL", "C#", "Azure"]
	},
	{
	"id": 2,
    "name": "Jane",
    "skills": ["SQL", "Angular", "TypeScript"]
  }
]'
PRINT ISJSON(@myJson);
PRINT @myJson;
GO


-- Processing JSON: JSON_VALUE
DECLARE @jsonInfo nvarchar(MAX);
DECLARE @town nvarchar(32);

SET @jsonInfo=N'{
	"info": {
		"address": [
			{
				"town": "Paris"
			},
			{
				"town": "London"
			}
		]
	}
}';
PRINT @jsonInfo;

SET @town=JSON_VALUE(@jsonInfo,'$.info.address[0].town'); -- Paris
PRINT @town;

SET @town=JSON_VALUE(@jsonInfo,'$.info.address[1].town'); -- London
PRINT @town;


DECLARE @myJson2 nvarchar(max);
SET @myJson2 = N'{
	"StudentInfo": [
		{
			"id": 1,
			"name": "John",
			"skills": ["SQL", "C#", "Azure"]
		},
		{
			"id": 2,
			"name": "Jane",
			"skills": ["SQL", "Angular", "TypeScript"]
	  }
	]
}'

PRINT ISJSON(@myJson2);

PRINT @myJson2;

DECLARE @s1 nvarchar(max);
SET @s1 = JSON_VALUE(@myJson2, '$.StudentInfo[0].name');
PRINT @s1;

DECLARE @s2 nvarchar(max);
SET @s2 = JSON_VALUE(@myJson2, '$.StudentInfo[1].skills[2]');
PRINT @s2;


-- Processing JSON: JSON_QUERY
SET @s1 = JSON_QUERY(@myJson2, '$');
PRINT @s1;

SET @s1 = JSON_QUERY(@myJson2, '$.StudentInfo');
PRINT @s1;

SET @s2 = JSON_QUERY(@myJson2, '$.StudentInfo[1].skills');
PRINT @s2;


-- Processing JSON: JSON_MODIFY
DECLARE @info NVARCHAR(100)='{"name":"John","skills":["C#","SQL"]}'
PRINT @info

-- Update name  
SET @info=JSON_MODIFY(@info,'$.name','Mike')
PRINT @info

-- Insert surname  
SET @info=JSON_MODIFY(@info,'$.surname','Smith')
PRINT @info

-- Set name NULL 
SET @info=JSON_MODIFY(@info,'strict $.name',NULL)
PRINT @info

-- Delete name  
SET @info=JSON_MODIFY(@info,'$.name',NULL)
PRINT @info

-- Add skill  
SET @info=JSON_MODIFY(@info,'append $.skills','Azure')
PRINT @info

